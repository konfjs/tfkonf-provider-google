import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirebaseAppCheckDeviceCheckConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFirebaseAppCheckDeviceCheckConfigArgs {
  app_id: string;
  key_id: string;
  private_key: string;
  timeouts?: GoogleFirebaseAppCheckDeviceCheckConfigArgsTimeouts;
}

export class google_firebase_app_check_device_check_config extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleFirebaseAppCheckDeviceCheckConfigArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_firebase_app_check_device_check_config", resourceName);
  }

  get app_id(): string {
    return `${this.resourceType}.${this.resourceName}.app_id`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get key_id(): string {
    return `${this.resourceType}.${this.resourceName}.key_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get private_key(): string {
    return `${this.resourceType}.${this.resourceName}.private_key`;
  }

  get private_key_set(): string {
    return `${this.resourceType}.${this.resourceName}.private_key_set`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get token_ttl(): string {
    return `${this.resourceType}.${this.resourceName}.token_ttl`;
  }
}
