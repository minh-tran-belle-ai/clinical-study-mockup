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

class PASIStudy implements ClinicalStudy {
    name: string;
    altName: string;
    startDate: Date;
    endDate: Date;
    organization: string;
    createdBy: string;
    images: studyImageFolder[];
    users: string[];
    score: PASIStudyScore;
    constructor(name: string, startDate: Date, endDate: Date, altName?: string, organization?: string, createdBy?: string, images?: studyImageFolder[], users?: string[], score?: PASIStudyScore) {
        this.name = name
        this.startDate = startDate
        this.endDate = endDate
        this.createdBy = createdBy ? createdBy : ""
        this.organization = organization ? organization : ""
        this.altName = altName ? altName : ""
        this.images = images ? images : []
        this.users = users ? users : []
        this.score = score ? score : new PASIStudyScore
    }
}

class PASIStudyScore {
    headNeck: PASIComponentScore
    trunk: PASIComponentScore
    upperExtremities: PASIComponentScore
    lowerExtremities: PASIComponentScore
    constructor() {
        this.headNeck = new PASIComponentScore(0.1),
        this.trunk = new PASIComponentScore(0.3),
        this.upperExtremities = new PASIComponentScore(0.2),
        this.lowerExtremities = new PASIComponentScore(0.4)
    }
    getFullBodyScore() {
        return this.headNeck.totalScore + this.trunk.totalScore + this.upperExtremities.totalScore + this.lowerExtremities.totalScore
    }
}

class PASIComponentScore {
    private _erythema: number;
    public get erythema(): number {
        return this._erythema;
    }
    public set erythema(value: number) {
        this._erythema = value;
        this.totalScore = this.calculateTotalScore()
    }
    private _induration: number;
    public get induration(): number {
        return this._induration;
    }
    public set induration(value: number) {
        this._induration = value;
        this.totalScore = this.calculateTotalScore()
    }
    private _desquanmation: number;
    public get desquanmation(): number {
        return this._desquanmation;
    }
    public set desquanmation(value: number) {
        this._desquanmation = value;
        this.totalScore = this.calculateTotalScore()
    }
    private _ratio: number;
    public get ratio(): number {
        return this._ratio;
    }
    private set ratio(value: number) {
        this._ratio = value;
        this.totalScore = this.calculateTotalScore()
    }
    private _totalScore: number;
    public get totalScore(): number {
        return this._totalScore;
    }
    private set totalScore(value: number) {
        this._totalScore = value
    }

    private calculateTotalScore() {
        return (this._erythema + this._induration + this._desquanmation) * this._ratio
    }
    constructor(ratio: number) {
        this._erythema = 0
        this._induration = 0
        this._desquanmation = 0
        this._ratio = ratio
        this._totalScore = 0
    }
}