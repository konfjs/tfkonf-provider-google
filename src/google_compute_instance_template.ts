import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeInstanceTemplateArgsAdvancedMachineFeatures {
  enable_nested_virtualization?: boolean;
  threads_per_core?: number;
  turbo_mode?: string;
  visible_core_count?: number;
}

export interface GoogleComputeInstanceTemplateArgsConfidentialInstanceConfig {
  confidential_instance_type?: string;
  enable_confidential_compute?: boolean;
}

export interface GoogleComputeInstanceTemplateArgsDiskDiskEncryptionKey {
  kms_key_self_link: string;
}

export interface GoogleComputeInstanceTemplateArgsDiskSourceImageEncryptionKey {
  kms_key_self_link: string;
  kms_key_service_account?: string;
}

export interface GoogleComputeInstanceTemplateArgsDiskSourceSnapshotEncryptionKey {
  kms_key_self_link: string;
  kms_key_service_account?: string;
}

export interface GoogleComputeInstanceTemplateArgsDisk {
  auto_delete?: boolean;
  disk_name?: string;
  labels?: { [key: string]: string };
  resource_manager_tags?: { [key: string]: string };
  resource_policies?: string[];
  source?: string;
  source_snapshot?: string;
  disk_encryption_key?: GoogleComputeInstanceTemplateArgsDiskDiskEncryptionKey;
  source_image_encryption_key?: GoogleComputeInstanceTemplateArgsDiskSourceImageEncryptionKey;
  source_snapshot_encryption_key?: GoogleComputeInstanceTemplateArgsDiskSourceSnapshotEncryptionKey;
}

export interface GoogleComputeInstanceTemplateArgsGuestAccelerator {
  count: number;
  type: string;
}

export interface GoogleComputeInstanceTemplateArgsNetworkInterfaceAccessConfig {
}

export interface GoogleComputeInstanceTemplateArgsNetworkInterfaceAliasIpRange {
  ip_cidr_range: string;
  subnetwork_range_name?: string;
}

export interface GoogleComputeInstanceTemplateArgsNetworkInterfaceIpv6AccessConfig {
  network_tier: string;
}

export interface GoogleComputeInstanceTemplateArgsNetworkInterface {
  network_ip?: string;
  nic_type?: string;
  queue_count?: number;
  access_config?: GoogleComputeInstanceTemplateArgsNetworkInterfaceAccessConfig[];
  alias_ip_range?: GoogleComputeInstanceTemplateArgsNetworkInterfaceAliasIpRange[];
  ipv6_access_config?: GoogleComputeInstanceTemplateArgsNetworkInterfaceIpv6AccessConfig[];
}

export interface GoogleComputeInstanceTemplateArgsNetworkPerformanceConfig {
  total_egress_bandwidth_tier: string;
}

export interface GoogleComputeInstanceTemplateArgsReservationAffinitySpecificReservation {
  key: string;
  values: string[];
}

export interface GoogleComputeInstanceTemplateArgsReservationAffinity {
  type: string;
  specific_reservation?: GoogleComputeInstanceTemplateArgsReservationAffinitySpecificReservation;
}

export interface GoogleComputeInstanceTemplateArgsSchedulingLocalSsdRecoveryTimeout {
  nanos?: number;
  seconds: number;
}

export interface GoogleComputeInstanceTemplateArgsSchedulingMaxRunDuration {
  nanos?: number;
  seconds: number;
}

export interface GoogleComputeInstanceTemplateArgsSchedulingNodeAffinities {
  key: string;
  operator: string;
  values: string[];
}

export interface GoogleComputeInstanceTemplateArgsSchedulingOnInstanceStopAction {
  discard_local_ssd?: boolean;
}

export interface GoogleComputeInstanceTemplateArgsScheduling {
  automatic_restart?: boolean;
  instance_termination_action?: string;
  min_node_cpus?: number;
  preemptible?: boolean;
  local_ssd_recovery_timeout?: GoogleComputeInstanceTemplateArgsSchedulingLocalSsdRecoveryTimeout[];
  max_run_duration?: GoogleComputeInstanceTemplateArgsSchedulingMaxRunDuration;
  node_affinities?: GoogleComputeInstanceTemplateArgsSchedulingNodeAffinities[];
  on_instance_stop_action?: GoogleComputeInstanceTemplateArgsSchedulingOnInstanceStopAction;
}

export interface GoogleComputeInstanceTemplateArgsServiceAccount {
  scopes: string[];
}

export interface GoogleComputeInstanceTemplateArgsShieldedInstanceConfig {
  enable_integrity_monitoring?: boolean;
  enable_secure_boot?: boolean;
  enable_vtpm?: boolean;
}

export interface GoogleComputeInstanceTemplateArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleComputeInstanceTemplateArgs {
  can_ip_forward?: boolean;
  description?: string;
  instance_description?: string;
  key_revocation_action_type?: string;
  labels?: { [key: string]: string };
  machine_type: string;
  metadata?: { [key: string]: string };
  metadata_startup_script?: string;
  min_cpu_platform?: string;
  resource_manager_tags?: { [key: string]: string };
  resource_policies?: string[];
  tags?: string[];
  advanced_machine_features?: GoogleComputeInstanceTemplateArgsAdvancedMachineFeatures;
  confidential_instance_config?: GoogleComputeInstanceTemplateArgsConfidentialInstanceConfig;
  disk: GoogleComputeInstanceTemplateArgsDisk[];
  guest_accelerator?: GoogleComputeInstanceTemplateArgsGuestAccelerator[];
  network_interface?: GoogleComputeInstanceTemplateArgsNetworkInterface[];
  network_performance_config?: GoogleComputeInstanceTemplateArgsNetworkPerformanceConfig;
  reservation_affinity?: GoogleComputeInstanceTemplateArgsReservationAffinity;
  scheduling?: GoogleComputeInstanceTemplateArgsScheduling;
  service_account?: GoogleComputeInstanceTemplateArgsServiceAccount;
  shielded_instance_config?: GoogleComputeInstanceTemplateArgsShieldedInstanceConfig;
  timeouts?: GoogleComputeInstanceTemplateArgsTimeouts;
}

export class google_compute_instance_template extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeInstanceTemplateArgs) {
    const meta = {advanced_machine_features:{isBlock:true},confidential_instance_config:{isBlock:true},disk:{isBlock:true,disk_encryption_key:{isBlock:true},source_image_encryption_key:{isBlock:true},source_snapshot_encryption_key:{isBlock:true}},guest_accelerator:{isBlock:true},network_interface:{isBlock:true,access_config:{isBlock:true},alias_ip_range:{isBlock:true},ipv6_access_config:{isBlock:true}},network_performance_config:{isBlock:true},reservation_affinity:{isBlock:true,specific_reservation:{isBlock:true}},scheduling:{isBlock:true,local_ssd_recovery_timeout:{isBlock:true},max_run_duration:{isBlock:true},node_affinities:{isBlock:true},on_instance_stop_action:{isBlock:true}},service_account:{isBlock:true},shielded_instance_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_instance_template", resourceName);
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get machine_type(): string {
    return `${this.resourceType}.${this.resourceName}.machine_type`;
  }

  get metadata_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.metadata_fingerprint`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get name_prefix(): string {
    return `${this.resourceType}.${this.resourceName}.name_prefix`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get self_link_unique(): string {
    return `${this.resourceType}.${this.resourceName}.self_link_unique`;
  }

  get tags_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.tags_fingerprint`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
