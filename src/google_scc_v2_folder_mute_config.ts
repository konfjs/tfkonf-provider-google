import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleSccV2FolderMuteConfigArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleSccV2FolderMuteConfigArgs {
  description?: string;
  filter: string;
  folder: string;
  location?: string;
  mute_config_id: string;
  type: string;
  timeouts?: GoogleSccV2FolderMuteConfigArgsTimeouts;
}

export class google_scc_v2_folder_mute_config extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleSccV2FolderMuteConfigArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_scc_v2_folder_mute_config", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get filter(): string {
    return `${this.resourceType}.${this.resourceName}.filter`;
  }

  get folder(): string {
    return `${this.resourceType}.${this.resourceName}.folder`;
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

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
