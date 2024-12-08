import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareDicomStoreIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleHealthcareDicomStoreIamBindingArgs {
  dicom_store_id: string;
  members: string[];
  role: string;
  condition?: GoogleHealthcareDicomStoreIamBindingArgsCondition;
}

export class google_healthcare_dicom_store_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleHealthcareDicomStoreIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_healthcare_dicom_store_iam_binding", resourceName);
  }

  get dicom_store_id(): string {
    return `${this.resourceType}.${this.resourceName}.dicom_store_id`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
