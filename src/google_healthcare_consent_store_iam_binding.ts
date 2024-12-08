import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareConsentStoreIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleHealthcareConsentStoreIamBindingArgs {
  consent_store_id: string;
  dataset: string;
  members: string[];
  role: string;
  condition?: GoogleHealthcareConsentStoreIamBindingArgsCondition;
}

export class google_healthcare_consent_store_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleHealthcareConsentStoreIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_healthcare_consent_store_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
