import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleIapWebRegionBackendServiceIamPolicyArgs {
  policy_data: string;
  web_region_backend_service: string;
}

export class google_iap_web_region_backend_service_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleIapWebRegionBackendServiceIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_iap_web_region_backend_service_iam_policy", resourceName);
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get web_region_backend_service(): string {
    return `${this.resourceType}.${this.resourceName}.web_region_backend_service`;
  }
}
