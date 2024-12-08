import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleEndpointsServiceIamPolicyArgs {
  service_name: string;
}

export class data_google_endpoints_service_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleEndpointsServiceIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_endpoints_service_iam_policy", resourceName);
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

  get service_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_name`;
  }
}