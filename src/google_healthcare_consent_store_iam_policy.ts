import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareConsentStoreIamPolicyArgs {
  consent_store_id: string;
  dataset: string;
  policy_data: string;
}

export class google_healthcare_consent_store_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleHealthcareConsentStoreIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_healthcare_consent_store_iam_policy", resourceName);
  }

  get consent_store_id(): string {
    return `${this.resourceType}.${this.resourceName}.consent_store_id`;
  }

  get dataset(): string {
    return `${this.resourceType}.${this.resourceName}.dataset`;
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
