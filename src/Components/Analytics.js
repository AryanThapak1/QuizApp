// Analytics.js
import React, { useEffect, useState } from 'react';
import { Bar,Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import styles from './Analytics.module.css';

Chart.register(...registerables);

const Analytics = () => {
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const id = sessionStorage.getItem('token');

  const fetchdata = async () => {
    const response = await fetch(`http://localhost:8080/api/v1/students/analytics/${id}`);
    const marksData = await response.json();
    let label = marksData.map((el) => el.quizName);
    let newData = marksData.map((el) => el.obtainedMarks);
    setLabels(label);
    setData(newData);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const state = {
    labels,
    datasets: [
      {
        label: 'Quiz Marks in %',
        backgroundColor: [
          'Indigo',
          'Purple',
          'Yellow',
          'Teal',
          'Red',
          'Navy',
          'Brown',
        ],
        data,
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.chartTitle}>Quiz Marks</h2>
      <div className={styles.chartContainer}>
        <Bar
          data={state}
          options={{
            title: {
              display: true,
              text: 'Quiz Marks in %',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
          }}
        />
      </div>
      <ul className={styles.chartLegend}>
        {labels.map((label, index) => (
          <li key={index} className={styles.chartLegendItem}>
            <div className={`${styles.legendColor} ${styles[`color${index + 1}`]}`} />
            {label}
          </li>
        ))}
      </ul>
      <Line
          data={state}
          options={{
            title: {
              display: true,
              text: 'Quiz Marks',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
          }}
        />
        {labels.map((label, index) => (
          <li key={index} className={styles.chartLegendItem}>
            <div className={`${styles.legendColor} ${styles[`color${index + 1}`]}`} />
            {label}
          </li>
        ))}
    </div>
    
  );
};

export default Analytics;
