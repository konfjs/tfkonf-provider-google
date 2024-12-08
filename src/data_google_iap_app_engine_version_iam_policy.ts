import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleIapAppEngineVersionIamPolicyArgs {
  app_id: string;
  service: string;
  version_id: string;
}

export class data_google_iap_app_engine_version_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleIapAppEngineVersionIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_iap_app_engine_version_iam_policy", resourceName);
  }

  get app_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.app_id`;
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

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get service(): string {
    return `data.${this.resourceType}.${this.resourceName}.service`;
  }

  get version_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.version_id`;
  }
}