import React, {useContext, useState} from 'react'
import {dataContext} from '../Data/Data';
import Checkbox from './Checkbox';
import * as V from 'victory';
import { VictoryBar,  VictoryChart, VictoryAxis, VictoryGroup, VictoryLine} from 'victory';
import './Gemiddeld.css'


function Gemiddeld() {

    const [studentData] =useContext(dataContext)
    const [filtertData, setFiltertData] = useState(studentData)
    const [checkedData, setCheckedData] = useState(studentData)
    const [funCheck, setFunCheck] = useState({check:true})
    const [hardCheck, setHardCheck] = useState({check:true})

    const ResetData = () =>{
        setFiltertData(studentData)
        setCheckedData(studentData)
    }
    const CollorChangerFun = funCheck.check?"tomato":"#222831"
    const CollorChangerHard = hardCheck.check?"gold":"#222831"

    const CheckPerPersonHandler= (Checkbox) =>{
        const Value = Checkbox.target.nextSibling.innerText
        const clikedPerson = checkedData.filter(item => {
            let person
            if (item.name === Value){
                person = item
                // return item.check
            }
            return person
        });
        const checked = clikedPerson[0].check
        if (checked === false){
            if(filtertData.length === 1){
                alert("You need at least one person!")
                return
            }
            const filterData = filtertData.filter(item => item.name !== Value)
            setFiltertData(filterData)
            setCheckedData(checkedData.map(item =>{
                if (item.name === Value){
                    return{
                    ...item, check: !item.check
                    }
                }
                return item;
            }))
        } else if(checked === true){
            const deletedData = checkedData.filter(item => item.name === Value)
            setFiltertData([...filtertData, deletedData[0]])
            setCheckedData(checkedData.map(item =>{
                if (item.name === Value){
                    return{
                    ...item, check: !item.check
                    }
                }
                return item;
            }))
        }
    }

    const opdrachten = []
    filtertData.map(item => {
        opdrachten.push(item.opdrachten)
    })

    const perOpdracht = []
    opdrachten[0].map(item => {
        perOpdracht.push(item.opdracht)
    })

    const count = (num1, num2) => num1 + num2
    const alleLeuk = []
    for (var e = 0; e < 56; e++){
        const perleuk = []
            for (var i = 0; i < filtertData.length; i++){
            const getMoeilijk  = opdrachten[i].map(item => item.Leuk)
                perleuk.push(Number(getMoeilijk[e]))
        }
        const GemiddeldeLeuk = perleuk.reduce(count) / perleuk.length
        alleLeuk.push({leuk:GemiddeldeLeuk})
    }

    const alleMoeilijk = []
    for (var e = 0; e < 56; e++){
        const perMoeilijk = []
            for (var i = 0; i < filtertData.length; i++){
            const getMoeilijk  = opdrachten[i].map(item => item.moeilijk)
                perMoeilijk.push(Number(getMoeilijk[e]))
        }
        const Gemiddeldemoeilijk = perMoeilijk.reduce(count) / perMoeilijk.length
        alleMoeilijk.push({moeilijk: Gemiddeldemoeilijk})  
    }

    const getNumber = []
    for (var i = 1; i <= 56; i++) {
        getNumber.push(i)
    }

    const CheckFunHandler = () =>{
        if (funCheck.check === false){
            setFunCheck({check: true})
        } else {setFunCheck({check: false})}
    }
    const CheckHardHandler = () =>{
        if (hardCheck.check === false){
            setHardCheck({check: true})
        } else {setHardCheck({check: false})}
    }


    return (
        <div className="GemiddeldeContainer">
            <h1 className="GemiddeldeTitle">Average rating</h1>
            <div className="GrafiekenContainer2">
                <div className="checkPerStudent">
                    {checkedData.map(item => {
                        const name = item.name
                        const Checked = item.check
                        return (<Checkbox name={name} key={item.id} CheckPerPersonHandler={CheckPerPersonHandler} check={Checked}/>)
                    })}
                    <button onClick={ResetData}>Reset</button>
                </div>
                <div className="ColorsContainer">
                    <div className="ColorBox">
                        <div className="tomato">
                            <input type="checkbox" onClick={CheckFunHandler} checked={funCheck.check}></input>
                        </div>
                        <p className="Leuk">Fun</p>
                        
                    </div>
                    <div className="ColorBox">
                        <div className="gold">
                            <input type="checkbox" onClick={CheckHardHandler} checked={hardCheck.check} ></input>
                        </div>
                        <p className="Moeilijkheid">Hard</p>
                    </div>
                </div>
                <div className="GemCardAndLineContainer">
                    <div className="GemiddeldeCardContainer">
                        <VictoryChart 
                            padding={{ top: 20, bottom: 140, right: 10, left: 40 }}
                            domainPadding={1}
                            animate={{duration: 2000}}>
                            <VictoryAxis
                                offsetX={3}
                                offsetY={140}
                                tickValues={getNumber}
                                tickFormat={perOpdracht}
                                style={{tickLabels: { fill: '#e8e8e8', fontSize: 8, angle: 90, textAnchor: "start"}, axis: {stroke: "#e8e8e8"}}}
                            />
                            <VictoryAxis
                                style={{tickLabels: { fill: '#e8e8e8', fontSize: 8, }, axis: {stroke: "#e8e8e8"}}}
                                offsetX={37}
                                dependentAxis
                                // tickFormat specifies how ticks should be displayed
                                tickFormat={[1.0,2.0,3.0,4.0,5.0]}
                            />
                            <VictoryGroup
                                    offset={3}
                                    colorScale={[CollorChangerFun, CollorChangerHard]}
                                >
                                    <VictoryBar
                                        data={alleLeuk}
                                            x={perOpdracht}
                                            y="leuk"
                                    />
                                    <VictoryBar
                                        data={alleMoeilijk}
                                            x={perOpdracht}
                                            y="moeilijk"
                                    />
                            </VictoryGroup>
                        </VictoryChart>
                    </div>
                    <div className="GemiddeldeLineContainer">
                        <VictoryChart 
                        padding={{ top: 20, bottom: 140, right: 10, left: 40 }}
                        domainPadding={1}
                        animate={{duration: 2000}}>
                        <VictoryAxis
                            offsetX={3}
                            offsetY={140}
                            tickValues={getNumber}
                            tickFormat={perOpdracht}
                            style={{tickLabels: { fill: '#e8e8e8', fontSize: 8, angle: 90, textAnchor: "start"}, axis: {stroke: "#e8e8e8"}}}
                        />
                        <VictoryAxis
                            style={{tickLabels: { fill: '#e8e8e8', fontSize: 8, }, axis: {stroke: "#e8e8e8"}}}
                            offsetX={40}
                            dependentAxis
                            tickFormat={[0,0.5,1.0,1.5,2.0,2.5,3.0,3.5,4, 4.5,5]}
                        />
                        {funCheck.check ? 
                            <VictoryLine
                                style={{
                                data: { stroke: "tomato" },
                                parent: { border: "2px solid #ccc"}
                                }}
                                data={alleLeuk}
                                    x={perOpdracht}
                                    y="leuk"
                            />
                            : null
                        }
                        {hardCheck.check ? 
                            <VictoryLine
                            style={{
                            data: { stroke: "gold" },
                            parent: { border: "2px solid #ccc"}
                            }}
                            data={alleMoeilijk}
                                x={perOpdracht}
                                y="moeilijk"
                        />
                            : null
                        }
                        
                    </VictoryChart>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Gemiddeld
