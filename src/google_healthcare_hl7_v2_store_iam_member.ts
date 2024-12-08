import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareHl7V2StoreIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleHealthcareHl7V2StoreIamMemberArgs {
  hl7_v2_store_id: string;
  member: string;
  role: string;
  condition?: GoogleHealthcareHl7V2StoreIamMemberArgsCondition;
}

export class google_healthcare_hl7_v2_store_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleHealthcareHl7V2StoreIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_healthcare_hl7_v2_store_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
