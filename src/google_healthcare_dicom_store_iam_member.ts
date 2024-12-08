import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareDicomStoreIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleHealthcareDicomStoreIamMemberArgs {
  dicom_store_id: string;
  member: string;
  role: string;
  condition?: GoogleHealthcareDicomStoreIamMemberArgsCondition;
}

export class google_healthcare_dicom_store_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleHealthcareDicomStoreIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_healthcare_dicom_store_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
