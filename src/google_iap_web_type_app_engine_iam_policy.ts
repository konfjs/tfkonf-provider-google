import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapWebTypeAppEngineIamPolicyArgs {
  app_id: string;
  policy_data: string;
}

export class google_iap_web_type_app_engine_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIapWebTypeAppEngineIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_iap_web_type_app_engine_iam_policy", resourceName);
  }

  get app_id(): string {
    return `${this.resourceType}.${this.resourceName}.app_id`;
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
