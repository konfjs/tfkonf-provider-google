import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleHealthcareConsentStoreIamPolicyArgs {
  consent_store_id: string;
  dataset: string;
}

export class data_google_healthcare_consent_store_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleHealthcareConsentStoreIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_healthcare_consent_store_iam_policy", resourceName);
  }

  get consent_store_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.consent_store_id`;
  }

  get dataset(): string {
    return `data.${this.resourceType}.${this.resourceName}.dataset`;
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
