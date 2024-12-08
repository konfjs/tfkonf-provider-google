import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleEventarcChannelArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleEventarcChannelArgs {
  crypto_key_name?: string;
  location: string;
  name: string;
  third_party_provider?: string;
  timeouts?: GoogleEventarcChannelArgsTimeouts;
}

export class google_eventarc_channel extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleEventarcChannelArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_eventarc_channel", resourceName);
  }

  get activation_token(): string {
    return `${this.resourceType}.${this.resourceName}.activation_token`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
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

  get pubsub_topic(): string {
    return `${this.resourceType}.${this.resourceName}.pubsub_topic`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
