import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEndpointsServiceConsumersIamPolicyArgs {
  consumer_project: string;
  policy_data: string;
  service_name: string;
}

export class google_endpoints_service_consumers_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleEndpointsServiceConsumersIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_endpoints_service_consumers_iam_policy", resourceName);
  }

  get consumer_project(): string {
    return `${this.resourceType}.${this.resourceName}.consumer_project`;
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
