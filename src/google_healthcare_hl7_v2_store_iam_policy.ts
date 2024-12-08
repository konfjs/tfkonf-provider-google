import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareHl7V2StoreIamPolicyArgs {
  hl7_v2_store_id: string;
  policy_data: string;
}

export class google_healthcare_hl7_v2_store_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleHealthcareHl7V2StoreIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_healthcare_hl7_v2_store_iam_policy", resourceName);
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get hl7_v2_store_id(): string {
    return `${this.resourceType}.${this.resourceName}.hl7_v2_store_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }
}
