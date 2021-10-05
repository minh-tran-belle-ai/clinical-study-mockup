import { studyImageFolder, StudyType } from '../redux/type'
interface ClinicalStudy { 
    name: string;
    altName: string;
    startDate: Date;
    endDate: Date;
    organization: string;
    createdBy: string;
    images: studyImageFolder[];
    users: string[];
}

interface PASIAllBodyRegions {
    [key: string]: PASIBodyRegion
}

class PASIStudy implements ClinicalStudy {
    name: string;
    altName: string;
    startDate: Date;
    endDate: Date;
    organization: string;
    createdBy: string;
    images: studyImageFolder[];
    users: string[];
    bodyRegion: PASIAllBodyRegions

    constructor(name: string, startDate: Date, endDate: Date, altName?: string, organization?: string, createdBy?: string, images?: studyImageFolder[], users?: string[]) {
        this.name = name
        this.startDate = startDate
        this.endDate = endDate
        this.createdBy = createdBy ? createdBy : ""
        this.organization = organization ? organization : ""
        this.altName = altName ? altName : ""
        this.images = images ? images : []
        this.users = users ? users : []
        this.bodyRegion = {
            headNeck: new PASIBodyRegion("Head/Neck", 0.1),
            trunk: new PASIBodyRegion("Trunk", 0.3),
            upperExtremities: new PASIBodyRegion("Upper Extremitites", 0.2),
            lowerExtremities: new PASIBodyRegion("Lower Extremitites", 0.4)
        };
    }

    getFullBodyScore() {
        return this.bodyRegion.headNeck.getTotalScore() + this.bodyRegion.trunk.getTotalScore() + this.bodyRegion.upperExtremities.getTotalScore() + this.bodyRegion.lowerExtremities.getTotalScore()
    }
}

class PASIBodyRegion {
    private _name: string
    public get name(): string {
        return this._name;
    }
    private set name(value: string) {
        this._name = value;
    }
    private _erythema: number;
    public get erythema(): number {
        return this._erythema;
    }
    public set erythema(value: number) {
        this._erythema = value;
    }
    private _induration: number;
    public get induration(): number {
        return this._induration;
    }
    public set induration(value: number) {
        this._induration = value;
    }
    private _desquanmation: number;
    public get desquanmation(): number {
        return this._desquanmation;
    }
    public set desquanmation(value: number) {
        this._desquanmation = value;
    }
    private _regionScore: number;
    public get regionScore(): number {
        return this._regionScore;
    }
    public set regionScore(value: number) {
        this._regionScore = value;
    }
    private _multiplier: number;
    public get multiplier(): number {
        return this._multiplier;
    }
    private set multiplier(value: number) {
        this._multiplier = value;
    }

    getTotalScore() {
        return (this._erythema + this._induration + this._desquanmation + this._regionScore) * this._multiplier
    }
    constructor(name: string, multiplier: number) {
        this._name = name
        this._erythema = 0
        this._induration = 0
        this._desquanmation = 0
        this._regionScore = 0
        this._multiplier = multiplier
    }
}

export {
    PASIStudy, PASIBodyRegion
};
export type { PASIAllBodyRegions };
