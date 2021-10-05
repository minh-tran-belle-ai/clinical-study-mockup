import React, {useState, useEffect, useCallback} from 'react'
import { Table } from '../Study.styles'
import { PASIStudy, PASIAllBodyRegions } from '../../../models/PASIStudy'

type Props = {
    selected: PASIStudy
}

const PASITable = ({ selected }: Props) => {
    const [data, setData] = useState(selected)
    const [regionTotalScore, setRegionTotalScore] = useState({
        headNeck: 0,
        trunk: 0,
        upperExtremities: 0,
        lowerExtremities: 0
    })

    useEffect(() => {
        setRegionTotalScore({
            headNeck: data.bodyRegion.headNeck.getTotalScore(),
            trunk: data.bodyRegion.trunk.getTotalScore(),
            upperExtremities: data.bodyRegion.upperExtremities.getTotalScore(),
            lowerExtremities: data.bodyRegion.lowerExtremities.getTotalScore()
        })
    }, [data])

    const changeErythema = (event: React.FormEvent<HTMLInputElement>) => {
        let dataCopy = data
        dataCopy.bodyRegion[event.currentTarget.name].erythema = (event.currentTarget.value as unknown as number)
        setData(dataCopy);
    }

    const changeInduration = (event: React.FormEvent<HTMLInputElement>) => {
        let dataCopy = data
        dataCopy.bodyRegion[event.currentTarget.name].induration = (event.currentTarget.value as unknown as number)
        setData(dataCopy);
    }

    const changeDesquanmation = (event: React.FormEvent<HTMLInputElement>) => {
        let dataCopy = data
        dataCopy.bodyRegion[event.currentTarget.name].desquanmation = (event.currentTarget.value as unknown as number)
        setData(dataCopy);
    }

    const changeRegionScore = (event: React.FormEvent<HTMLInputElement>) => {
        let dataCopy = data
        dataCopy.bodyRegion[event.currentTarget.name].regionScore = (event.currentTarget.value as unknown as number)
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
                return (<tr key={key}>
                    <th>{region.name}</th>
                    <td>
                        <span>(<input type="number" onChange={changeErythema} name={key}/>+</span>
                    </td>
                    <td>
                        <span><input type="number" onChange={changeInduration} name={key}/>+</span>
                    </td>
                    <td>
                        <span><input type="number" onChange={changeDesquanmation} name={key}/>)</span>
                    </td>
                    <td>
                        <span><input type="number" onChange={changeRegionScore} min={0} max={6} name={key}/></span>
                    </td>
                    <td>
                        <span>{region.multiplier}</span>
                    </td>
                    <td>
                        <span>{(regionTotalScore as any)[key]}</span>
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