import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleIapWebTypeAppEngineIamPolicyArgs {
  app_id: string;
}

export class data_google_iap_web_type_app_engine_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleIapWebTypeAppEngineIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_iap_web_type_app_engine_iam_policy", resourceName);
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
}
