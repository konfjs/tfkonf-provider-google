import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleEndpointsServiceConsumersIamPolicyArgs {
  consumer_project: string;
  service_name: string;
}

export class data_google_endpoints_service_consumers_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleEndpointsServiceConsumersIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_endpoints_service_consumers_iam_policy", resourceName);
  }

  get consumer_project(): string {
    return `data.${this.resourceType}.${this.resourceName}.consumer_project`;
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
