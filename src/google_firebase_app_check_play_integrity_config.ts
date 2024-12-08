import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleFirebaseAppCheckPlayIntegrityConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleFirebaseAppCheckPlayIntegrityConfigArgs {
  app_id: string;
  timeouts?: GoogleFirebaseAppCheckPlayIntegrityConfigArgsTimeouts;
}

export class google_firebase_app_check_play_integrity_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleFirebaseAppCheckPlayIntegrityConfigArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_firebase_app_check_play_integrity_config", resourceName);
  }

  get app_id(): string {
    return `${this.resourceType}.${this.resourceName}.app_id`;
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

  get token_ttl(): string {
    return `${this.resourceType}.${this.resourceName}.token_ttl`;
  }
}
