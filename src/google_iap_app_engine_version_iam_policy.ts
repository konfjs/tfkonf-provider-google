import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapAppEngineVersionIamPolicyArgs {
  app_id: string;
  policy_data: string;
  service: string;
  version_id: string;
}

export class google_iap_app_engine_version_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIapAppEngineVersionIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_iap_app_engine_version_iam_policy", resourceName);
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

  get service(): string {
    return `${this.resourceType}.${this.resourceName}.service`;
  }

  get version_id(): string {
    return `${this.resourceType}.${this.resourceName}.version_id`;
  }
}
