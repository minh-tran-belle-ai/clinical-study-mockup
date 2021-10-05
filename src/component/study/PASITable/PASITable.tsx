import React, {useState, useEffect} from 'react'
import { Table } from '../Study.styles'
import { PASIStudy } from '../../../models/PASIStudy'
import { cpuUsage } from 'process'

const componentName = {
    headNeck: "Head/Neck",
    trunk: "Trunk",
    lowerExtremities: "Lower Extremities",
    upperExtremities: "Upper Extremities"
}

type Props = {
    selected: PASIStudy
}

const PASITable = ({ selected }: Props) => {
    const [data, setData] = useState(selected)

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        let dataCopy = data
        setData(dataCopy);
    }

    return (
        <Table>
            <tr>
                <th>Body Region</th>
                <th>Redness</th>
                <th>Thickness</th>
                <th>Scaling</th>
                <th>Region Score (0-6)</th>
                <th>Multiplier</th>
                <th>Score per body region</th>
            </tr>
            {Object.entries(data.bodyRegion).map(([key, region], i) => {
                return (<tr>
                    <th>{region.name}</th>
                    <td>
                        <span>(<input type="number" name={key} value={region.erythema}/>+</span>
                    </td>
                    <td>
                        <span><input type="number" name={key} value={region.induration}/>+</span>
                    </td>
                    <td>
                        <span><input type="number" name={key} value={region.desquanmation}/>)</span>
                    </td>
                    <td>
                        <span><input min={0} max={6} type="number"/></span>
                    </td>
                    <td>
                        <span>{region.multiplier}</span>
                    </td>
                    <td>
                        <span>{region.totalScore}</span>
                    </td>
                </tr>)
            })}
            <tr>
                <th colSpan={6}>Final PASI score is sum of 4 body region scores</th>
                <td>{selected.getFullBodyScore()}</td>
            </tr>
        </Table>
    )
}

export default PASITable