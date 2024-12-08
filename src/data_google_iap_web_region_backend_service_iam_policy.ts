import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleIapWebRegionBackendServiceIamPolicyArgs {
  web_region_backend_service: string;
}

export class data_google_iap_web_region_backend_service_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleIapWebRegionBackendServiceIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_iap_web_region_backend_service_iam_policy", resourceName);
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

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `data.${this.resourceType}.${this.resourceName}.region`;
  }

  get web_region_backend_service(): string {
    return `data.${this.resourceType}.${this.resourceName}.web_region_backend_service`;
  }
}
