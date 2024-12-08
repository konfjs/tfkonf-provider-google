import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleHealthcareConsentStoreArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleHealthcareConsentStoreArgs {
  dataset: string;
  default_consent_ttl?: string;
  enable_consent_create_on_update?: boolean;
  labels?: { [key: string]: string };
  name: string;
  timeouts?: GoogleHealthcareConsentStoreArgsTimeouts;
}

export class google_healthcare_consent_store extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleHealthcareConsentStoreArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_healthcare_consent_store", resourceName);
  }

  get dataset(): string {
    return `${this.resourceType}.${this.resourceName}.dataset`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
