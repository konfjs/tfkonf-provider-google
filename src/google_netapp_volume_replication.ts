import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetappVolumeReplicationArgsDestinationVolumeParameters {
  description?: string;
  storage_pool: string;
}

export interface GoogleNetappVolumeReplicationArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetappVolumeReplicationArgs {
  delete_destination_volume?: boolean;
  description?: string;
  force_stopping?: boolean;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  replication_enabled?: boolean;
  replication_schedule: string;
  volume_name: string;
  wait_for_mirror?: boolean;
  destination_volume_parameters?: GoogleNetappVolumeReplicationArgsDestinationVolumeParameters;
  timeouts?: GoogleNetappVolumeReplicationArgsTimeouts;
}

export class google_netapp_volume_replication extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNetappVolumeReplicationArgs) {
    const meta = {destination_volume_parameters:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_netapp_volume_replication", resourceName);
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get destination_volume(): string {
    return `${this.resourceType}.${this.resourceName}.destination_volume`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get healthy(): string {
    return `${this.resourceType}.${this.resourceName}.healthy`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get mirror_state(): string {
    return `${this.resourceType}.${this.resourceName}.mirror_state`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get replication_schedule(): string {
    return `${this.resourceType}.${this.resourceName}.replication_schedule`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }

  get source_volume(): string {
    return `${this.resourceType}.${this.resourceName}.source_volume`;
  }

  get state(): string {
    return `${this.resourceType}.${this.resourceName}.state`;
  }

  get state_details(): string {
    return `${this.resourceType}.${this.resourceName}.state_details`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get transfer_stats(): string {
    return `${this.resourceType}.${this.resourceName}.transfer_stats`;
  }

  get volume_name(): string {
    return `${this.resourceType}.${this.resourceName}.volume_name`;
  }
}
