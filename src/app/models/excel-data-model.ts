export class ExcelDataModel {
    practitionerName: string;
    project: string;
    tower: string;
    module: string;
    certificationYear: string;
    typeOfResource: string;
    emailId: string;
    location: string;

    constructor(
        practitionerName: string,
        project: string,
        tower: string,
        module: string,
        certificationYear: string,
        typeOfResource: string,
        emailId: string,
        location: string
    ) {
        this.practitionerName = practitionerName;
        this.project = project;
        this.tower = tower;
        this.module = module;
        this.certificationYear = certificationYear;
        this.typeOfResource = typeOfResource;
        this.emailId = emailId;
        this.location = location;
    }
}
