import React, { Component } from "react";
import Chart from "react-apexcharts";
import { stringify } from "querystring";

class EmotionRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: [],
            options: {},
            series: [],
        }
    }

    render() {
        console.log("Kampret1", this.props.day7)
        this.state.options = {
            chart: {
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
              },
            colors: ['#77B6EA', '#FF6F3d'],
                stroke: {
                curve: 'smooth',
                    colors: undefined,
                        width: 2,
            },
            title: {
                text: 'Rekam Jejak Kondisi Mentalmu',
                    align: 'center',
                        style: {
                    color: '#476678',
                    fontSize: '14px',
                }
            },

            markers: {

                size: 0,
                    strokeColor: 'none',
                    hover: {
                        size: 4
                      }
            },
            xaxis: {
                categories: [
                    this.props.day7,
                    this.props.day6,
                    this.props.day5,
                    this.props.day4,
                    this.props.day3,
                    this.props.day2,
                    this.props.day1,
                    this.props.day0,
                ],
                    labels: {
                    rotate: -30,
                        rotateAlways: true,
                            style: {
                        fontSize: '0.8em',
                            colors: '#476678'
                            
                    }
                },
                // axisTicks: {show: false}
            },
            yaxis: {
                title: {
                    text: 'Intensi (kali)',
                        style: {
                        fontSize: '0.9em',
                            color: '#476678'
                    }
                },
                labels: {
                    style: {
                        fontSize: '0.6em',
                            color: '#476678'
                    }
                },

            },
            legend: {
                position: 'bottom',
                    horizontalAlign: 'center',
                        offsetY: -15,
                            itemMargin: {
                    horizontal: 25,
                        vertical: 25
                },
                labels: {
                    colors: '#476678'
                }
            }
        }
        this.state.series = [
            {
                name: "Intensi Negatif",
                data: [
                    this.props.sad7,
                    this.props.sad6,
                    this.props.sad5,
                    this.props.sad4,
                    this.props.sad3,
                    this.props.sad2,
                    this.props.sad1,
                    this.props.sad0,
                ]
            },
            {
                name: "Intensi Positif",
                data: [
                    this.props.happy7,
                    this.props.happy6,
                    this.props.happy5,
                    this.props.happy4,
                    this.props.happy3,
                    this.props.happy2,
                    this.props.happy1,
                    this.props.happy0,
                ]
            },
        ]
        return (

            <div id="chart" className="mb-5">
                <Chart options={this.state.options} series={this.state.series} type="area" height="300" />
            </div>

        );
    }
}

export default EmotionRecord;