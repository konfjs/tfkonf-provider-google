import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEndpointsServiceConsumersIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleEndpointsServiceConsumersIamMemberArgs {
  consumer_project: string;
  member: string;
  role: string;
  service_name: string;
  condition?: GoogleEndpointsServiceConsumersIamMemberArgsCondition;
}

export class google_endpoints_service_consumers_iam_member extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleEndpointsServiceConsumersIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_endpoints_service_consumers_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get service_name(): string {
    return `${this.resourceType}.${this.resourceName}.service_name`;
  }
}
