import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareDicomStoreIamPolicyArgs {
  dicom_store_id: string;
  policy_data: string;
}

export class google_healthcare_dicom_store_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleHealthcareDicomStoreIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_healthcare_dicom_store_iam_policy", resourceName);
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

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
