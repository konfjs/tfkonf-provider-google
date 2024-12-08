import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareConsentStoreIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleHealthcareConsentStoreIamMemberArgs {
  consent_store_id: string;
  dataset: string;
  member: string;
  role: string;
  condition?: GoogleHealthcareConsentStoreIamMemberArgsCondition;
}

export class google_healthcare_consent_store_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleHealthcareConsentStoreIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_healthcare_consent_store_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
