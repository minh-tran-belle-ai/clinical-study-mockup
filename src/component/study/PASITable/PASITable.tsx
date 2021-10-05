import React, {useState, useEffect} from 'react'
import { Table } from '../Study.styles'
import { PASIStudy } from '../../../models/PASIStudy'

enum PASIBodyRegion {
    HeadNeck = "Head/Neck",
    Trunk = "Trunk",
    UpperExtremities = "Upper Extremities",
    LowerExtremities = "Lower Extremities"
}

const RegionScoreMultiplier: { [key in PASIBodyRegion] : number } = {
    [PASIBodyRegion.HeadNeck]: 0.1,
    [PASIBodyRegion.Trunk]: 0.3,
    [PASIBodyRegion.UpperExtremities]: 0.2,
    [PASIBodyRegion.LowerExtremities]: 0.4,
}

type Props = {
    selected: PASIStudy
}

const PASITable = ({ selected }: Props) => {
    const [erythema, setErythema] = useState(selected)
    const [induration, setInduration] = useState(selected)
    const [desquanmation, setDesquanmation] = useState(selected)
    useEffect(() => {}, [])

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
            <tr>
                <th>Head/Neck</th>
                <td>
                    <span>(<input type="number" value={selected.score.headNeck.erythema}/>+</span>
                </td>
                <td>
                    <span><input type="number" value={selected.score.headNeck.induration}/>+</span>
                </td>
                <td>
                    <span><input type="number" value={selected.score.headNeck.desquanmation}/>)</span>
                </td>
                <td>
                    <span><input type="number"/></span>
                </td>
                <td>
                    <span><input type="number"/></span>
                </td>
                <td>
                    <span><input type="number"/></span>
                </td>
            </tr>
            <tr>
                <th>Trunk</th>
                <td>
                    <span>(<input type="number"/>+</span>
                </td>
                <td>
                    <span><input type="number"/>+</span>
                </td>
                <td>
                    <span><input type="number"/>)</span>
                </td>
                <td>
                    <span><input type="number"/></span>
                </td>
                <td>
                    <span><input type="number"/></span>
                </td>
                <td>
                    <span><input type="number"/></span>
                </td>
            </tr>
            <tr>
                <th>Upper Extremities</th>
                <td>
                    <span>(<input type="number"/>+</span>
                </td>
                <td>
                    <span><input type="number"/>+</span>
                </td>
                <td>
                    <span><input type="number"/>)</span>
                </td>
                <td>
                    <span><input type="number"/></span>
                </td>
                <td>
                    <span><input type="number"/></span>
                </td>
                <td>
                    <span><input type="number"/></span>
                </td>
            </tr>
            <tr>
                <th>Lower extremities</th>
                <td>
                    <span>(<input type="number"/>+</span>
                </td>
                <td>
                    <span><input type="number"/>+</span>
                </td>
                <td>
                    <span><input type="number"/>)</span>
                </td>
                <td>
                    <span><input type="number"/></span>
                </td>
                <td>
                    <span><input type="number"/></span>
                </td>
                <td>
                    <span><input type="number"/></span>
                </td>
            </tr>
            <tr>
                <th colSpan={6}>Final PASI score is sum of 4 body region scores</th>
                <td>0.0</td>
            </tr>
        </Table>
    )
}

export default PASITable