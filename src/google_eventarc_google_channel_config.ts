import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEventarcGoogleChannelConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleEventarcGoogleChannelConfigArgs {
  crypto_key_name?: string;
  location: string;
  name: string;
  timeouts?: GoogleEventarcGoogleChannelConfigArgsTimeouts;
}

export class google_eventarc_google_channel_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleEventarcGoogleChannelConfigArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_eventarc_google_channel_config", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
