import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapWebRegionBackendServiceIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleIapWebRegionBackendServiceIamMemberArgs {
  member: string;
  role: string;
  web_region_backend_service: string;
  condition?: GoogleIapWebRegionBackendServiceIamMemberArgsCondition;
}

export class google_iap_web_region_backend_service_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIapWebRegionBackendServiceIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_iap_web_region_backend_service_iam_member", resourceName);
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
