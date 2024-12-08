import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirebaseAppCheckServiceConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFirebaseAppCheckServiceConfigArgs {
  enforcement_mode?: string;
  service_id: string;
  timeouts?: GoogleFirebaseAppCheckServiceConfigArgsTimeouts;
}

export class google_firebase_app_check_service_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleFirebaseAppCheckServiceConfigArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_firebase_app_check_service_config", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get service_id(): string {
    return `${this.resourceType}.${this.resourceName}.service_id`;
  }
}
