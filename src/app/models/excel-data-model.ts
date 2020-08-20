export class ExcelDataModel {
    practitionerName: string;
    project: string;
    tower: string;
    module: string;
    certification: string;
    typeOfResource: string;
    emailId: string;
    location: string;

    constructor(
        practitionerName: string,
        project: string,
        tower: string,
        module: string,
        certification: string,
        typeOfResource: string,
        emailId: string,
        location: string
    ) {
        this.practitionerName = practitionerName;
        this.project = project;
        this.tower = tower;
        this.module = module;
        this.certification = certification;
        this.typeOfResource = typeOfResource;
        this.emailId = emailId;
        this.location = location;
    }
}
