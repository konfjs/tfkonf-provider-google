import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleIapWebBackendServiceIamPolicyArgs {
  web_backend_service: string;
}

export class data_google_iap_web_backend_service_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleIapWebBackendServiceIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_iap_web_backend_service_iam_policy", resourceName);
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

  get web_backend_service(): string {
    return `data.${this.resourceType}.${this.resourceName}.web_backend_service`;
  }
}
