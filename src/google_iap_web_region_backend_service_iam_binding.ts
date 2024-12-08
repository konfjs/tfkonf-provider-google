import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapWebRegionBackendServiceIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapWebRegionBackendServiceIamBindingArgs {
  members: string[];
  role: string;
  web_region_backend_service: string;
  condition?: GoogleIapWebRegionBackendServiceIamBindingArgsCondition;
}

export class google_iap_web_region_backend_service_iam_binding extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleIapWebRegionBackendServiceIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_web_region_backend_service_iam_binding", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get web_region_backend_service(): string {
    return `${this.resourceType}.${this.resourceName}.web_region_backend_service`;
  }
}
