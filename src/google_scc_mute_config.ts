import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccMuteConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccMuteConfigArgs {
  description?: string;
  filter: string;
  mute_config_id: string;
  parent: string;
  timeouts?: GoogleSccMuteConfigArgsTimeouts;
}

export class google_scc_mute_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSccMuteConfigArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_mute_config", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get filter(): string {
    return `${this.resourceType}.${this.resourceName}.filter`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get most_recent_editor(): string {
    return `${this.resourceType}.${this.resourceName}.most_recent_editor`;
  }

  get mute_config_id(): string {
    return `${this.resourceType}.${this.resourceName}.mute_config_id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `${this.resourceType}.${this.resourceName}.parent`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
