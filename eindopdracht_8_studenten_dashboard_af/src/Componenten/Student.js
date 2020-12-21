import React, {useContext, useState} from 'react'
import {dataContext} from '../Data/Data';
import * as V from 'victory';
import { VictoryBar,  VictoryChart, VictoryAxis, VictoryGroup, VictoryLine} from 'victory';
import './Student.css'

import StudentProfile from './StudentProfile'


function Student(props) {
    const [changeGraph, setChangeGraph] = useState({check:true})
    const [studentData] =useContext(dataContext)
    const getDataOfTheStudent = studentData.filter(persons => persons.name === props.name)
    const getOpdrachten = getDataOfTheStudent.map(person => person.opdrachten)
    const getEachOpdracht = getOpdrachten[0].map(item => item.opdracht)
    const getNumber = []
    for (var i = 1; i <= 56; i++) {
        getNumber.push(i)
    }
    const foto = props.picture

    const barOrLineHandeler = () =>{
        if (changeGraph.check === false){
            setChangeGraph({check: true})
        } else {setChangeGraph({check: false})}
    }

    return (
        <div className="GrafiekenContainer">
            <div className="ProfielAndGrafiekContainer" >
                <StudentProfile 
                name={props.name}
                foto={foto}
                story={props.story}/>
                <div className="personBothVictoryContainer">
                <div className="ColorsContainer">
                    <div className="ColorBox">
                        <div className="tomato"></div>
                        <div>
                            <p>Fun</p>
                        </div>
                    </div>
                    <div className="ColorBox">
                        <div className="gold"></div>
                        <div>
                            <p className="Moeilijkheid">Hard</p>
                        </div>
                    </div>
                    <div className="barOrLineContainer">
                        <div className="barOrLineBoxBox">
                            <input className="CheckBarOrLine" type="checkbox" checked={changeGraph.check} onChange={barOrLineHandeler}/>
                            <p className="CheckText">{changeGraph.check? 'Bar chart' : 'Line chart'}</p>
                        </div>
                    </div>
                </div>
                {changeGraph.check?
                    <VictoryChart
                        padding={{ top: 20, bottom: 140, right: 10, left: 50 }}
                        domainPadding={1}
                        animate={{duration: 2000}}>
                        <VictoryAxis
                            offsetY={140}
                            offsetX={10}
                            tickValues={getNumber}
                            tickFormat={getEachOpdracht}
                            style={{tickLabels: { fontSize: 6, angle: 90, textAnchor: "start", }}}
                        />
                        <VictoryAxis
                            dependentAxis
                            offsetX={45}
                        tickFormat={[1.0,2.0,3.0,4.0,5.0]}
                        />
                        <VictoryGroup
                            offset={3}
                            colorScale={["tomato", "gold"]}
                            >
                            <VictoryBar
                                data={getOpdrachten[0]}
                                    x='opdracht'
                                    y="Leuk"
                            />
                            <VictoryBar
                                data={getOpdrachten[0]}
                                    x='opdracht'
                                    y="moeilijk"
                            />    
                        </VictoryGroup>
                    </VictoryChart> 
                    :
                    <VictoryChart
                        padding={{ top: 20, bottom: 140, right: 10, left: 50 }}
                        domainPadding={1}
                        animate={{duration: 2000}}>
                        <VictoryAxis
                            offsetY={140}
                            offsetX={10}
                            tickValues={getNumber}
                            tickFormat={getEachOpdracht}
                            style={{tickLabels: { fontSize: 6, angle: 90, textAnchor: "start", }}}
                        />
                        <VictoryAxis
                            dependentAxis
                            offsetX={45}
                        tickFormat={[1.0,2.0,3.0,4.0,5.0]}
                        />
                        <VictoryLine
                                style={{
                                data: { stroke: "tomato" },
                                parent: { border: "2px solid #ccc"}
                                }}
                                data={getOpdrachten[0]}
                                    x='opdracht'
                                    y="Leuk"
                            />
                        <VictoryLine
                            style={{
                            data: { stroke: "gold" },
                            parent: { border: "2px solid #ccc"}
                            }}
                            data={getOpdrachten[0]}
                                x='opdracht'
                                y="moeilijk"
                        />
                    </VictoryChart>
                }
            </div>
            </div>

            <div className="personVictoryContainer">
                <div className="personVictoryContainerLeuk">
                    <h3>Leuk</h3>
                    <div className="personVictoryBox">
                        <VictoryChart 
                            padding={{ top: 0, bottom: 130, right: 10, left: 50 }}
                            domainPadding={1}
                            animate={{duration: 2000}}>
                            <VictoryAxis
                            offsetY={130}
                            offsetX={5}
                            tickValues={getNumber}
                            tickFormat={getEachOpdracht}
                            style={{tickLabels: { fontSize: 8, angle: 90, textAnchor: "start"}}}
                            />
                            <VictoryAxis
                            dependentAxis
                            // tickFormat specifies how ticks should be displayed
                            tickFormat={[1.0,2.0,3.0,4.0,5.0]}
                            />
                            {changeGraph.check
                                ?<VictoryBar
                            style={{
                                data: { fill: "#adce74" }
                                }}
                            data={getOpdrachten[0]}
                            x='opdracht'
                            y="Leuk"
                            />:<VictoryLine
                                style={{
                                data: { stroke: "#adce74" },
                                parent: { border: "2px solid #ccc"}
                                }}
                                data={getOpdrachten[0]}
                                    x='opdracht'
                                    y="Leuk"
                            />
                            }
                        </VictoryChart>
                    </div>
                </div>
                <div className="personVictoryContainerMoeilijk">
                    <h3>Moeilijk</h3>
                    <div className="personVictoryBox">
                        <VictoryChart 
                            padding={{ top: 0, bottom: 130, right: 10, left: 50 }}
                            domainPadding={1}
                            animate={{duration: 2000}}>
                            <VictoryAxis
                            tickValues={getNumber}
                            tickFormat={getEachOpdracht}
                            offsetY={130}
                            offsetX={5}
                            style={{tickLabels: { fontSize: 8, angle: 90, textAnchor: "start"}}
                            }
                            />
                            <VictoryAxis
                            dependentAxis
                            // tickFormat specifies how ticks should be displayed
                            tickFormat={[1.0,2.0,3.0,4.0,5.0]}
                            />
                            {changeGraph.check
                                ?<VictoryBar
                            style={{
                                data: { fill: "#c43a31" }
                                }}
                            data={getOpdrachten[0]}
                            x='opdracht'
                            y="moeilijk"
                            />:<VictoryLine
                                style={{
                                data: { stroke: "#c43a31" },
                                parent: { border: "2px solid #ccc"}
                                }}
                                data={getOpdrachten[0]}
                                    x='opdracht'
                                    y="moeilijk"
                            />
                            }
                        </VictoryChart>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Student
