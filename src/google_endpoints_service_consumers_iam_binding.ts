import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEndpointsServiceConsumersIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleEndpointsServiceConsumersIamBindingArgs {
  consumer_project: string;
  members: string[];
  role: string;
  service_name: string;
  condition?: GoogleEndpointsServiceConsumersIamBindingArgsCondition;
}

export class google_endpoints_service_consumers_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleEndpointsServiceConsumersIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_endpoints_service_consumers_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get service_name(): string {
    return `${this.resourceType}.${this.resourceName}.service_name`;
  }
}
