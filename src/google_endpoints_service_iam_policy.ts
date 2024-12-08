import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEndpointsServiceIamPolicyArgs {
  policy_data: string;
  service_name: string;
}

export class google_endpoints_service_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleEndpointsServiceIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_endpoints_service_iam_policy", resourceName);
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

  get service_name(): string {
    return `${this.resourceType}.${this.resourceName}.service_name`;
  }
}
