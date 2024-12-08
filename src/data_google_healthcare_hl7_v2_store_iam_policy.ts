import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleHealthcareHl7V2StoreIamPolicyArgs {
  hl7_v2_store_id: string;
}

export class data_google_healthcare_hl7_v2_store_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleHealthcareHl7V2StoreIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_healthcare_hl7_v2_store_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get hl7_v2_store_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.hl7_v2_store_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
