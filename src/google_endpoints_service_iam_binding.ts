import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEndpointsServiceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleEndpointsServiceIamBindingArgs {
  members: string[];
  role: string;
  service_name: string;
  condition?: GoogleEndpointsServiceIamBindingArgsCondition;
}

export class google_endpoints_service_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleEndpointsServiceIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_endpoints_service_iam_binding", resourceName);
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
