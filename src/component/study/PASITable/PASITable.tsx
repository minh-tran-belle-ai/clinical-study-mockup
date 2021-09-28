import React from 'react'
import { Table } from '../Study.styles'

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

const PASITable = () => {
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