import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleHealthcareDicomStoreIamPolicyArgs {
  dicom_store_id: string;
}

export class data_google_healthcare_dicom_store_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleHealthcareDicomStoreIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_healthcare_dicom_store_iam_policy", resourceName);
  }

  get dicom_store_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.dicom_store_id`;
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
