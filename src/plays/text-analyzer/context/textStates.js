import axios from 'axios';
import data from 'plays/dynamic-routes/Data';
import { useState } from 'react';
import TextContext from './playContext';

const TextState = ({ children }) => {
  const [value, setvalue] = useState();
  const [files, setFiles] = useState([]);
  const [TextfromImage, setTextfromImage] = useState();
  const [resultSentiments, setresultSentiments] = useState();
  const [resultEntities, setresultEntities] = useState();
  const [resultparaphraser, setresultparaphraser] = useState();

  const getSentiments = (text) => {
    console.log('clicked');
    const objdata = {
      language: 'english',
      text: text
    };
    const options = {
      method: 'POST',
      url: 'https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '225e9d1661msh382ffaa868531a6p1d3efajsnb28de9f305f8',
        'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
      },
      data: objdata
    };

    axios
      .request(options)
      .then(function (response) {
        setresultSentiments(response.data);
        setresultEntities();
        setresultparaphraser();
        setTextfromImage();
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const getEntities = (text) => {
    console.log('clicked');
    const options = {
      method: 'GET',
      url: 'https://textapis.p.rapidapi.com/ner',
      params: {
        text
      },
      headers: {
        'X-RapidAPI-Key': '225e9d1661msh382ffaa868531a6p1d3efajsnb28de9f305f8',
        'X-RapidAPI-Host': 'textapis.p.rapidapi.com'
      }
    };

    axios
      .request(options)
      .then(function (response) {
        setresultEntities(response.data);
        setresultparaphraser();
        setTextfromImage();
        setresultSentiments();
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const paraphraser = (text) => {
    console.log('clicked');
    const dataobj = {
      input: text
    };
    const options = {
      method: 'POST',
      url: 'https://paraphraser1.p.rapidapi.com/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '225e9d1661msh382ffaa868531a6p1d3efajsnb28de9f305f8',
        'X-RapidAPI-Host': 'paraphraser1.p.rapidapi.com'
      },
      data: dataobj
    };

    axios
      .request(options)
      .then(function (response) {
        setresultparaphraser(response.data);
        setTextfromImage();
        setresultSentiments();
        setresultEntities();
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const ImageToText = (formData) => {
    axios
      .request({
        method: 'POST',
        url: 'https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/',
        headers: {
          'X-RapidAPI-Key': '225e9d1661msh382ffaa868531a6p1d3efajsnb28de9f305f8',
          'X-RapidAPI-Host': 'pen-to-print-handwriting-ocr.p.rapidapi.com'
        },
        data: formData
      })
      .then(function (response) {
        setTextfromImage(response.data.value);
        setresultSentiments();
        setresultEntities();
        setresultparaphraser();
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <TextContext.Provider
      value={{
        value,
        setvalue,
        files,
        setFiles,
        getSentiments,
        getEntities,
        paraphraser,
        ImageToText,
        TextfromImage,
        resultEntities,
        resultSentiments,
        resultparaphraser
      }}
    >
      {children}
    </TextContext.Provider>
  );
};

export { TextState };