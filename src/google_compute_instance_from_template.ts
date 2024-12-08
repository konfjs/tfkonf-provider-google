import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleComputeInstanceFromTemplateArgsAdvancedMachineFeatures {
}

export interface GoogleComputeInstanceFromTemplateArgsAttachedDisk {
  source: string;
}

export interface GoogleComputeInstanceFromTemplateArgsBootDiskInitializeParams {
}

export interface GoogleComputeInstanceFromTemplateArgsBootDisk {
  initialize_params?: GoogleComputeInstanceFromTemplateArgsBootDiskInitializeParams;
}

export interface GoogleComputeInstanceFromTemplateArgsConfidentialInstanceConfig {
}

export interface GoogleComputeInstanceFromTemplateArgsGuestAccelerator {
  count: number;
  type: string;
}

export interface GoogleComputeInstanceFromTemplateArgsNetworkInterfaceAccessConfig {
}

export interface GoogleComputeInstanceFromTemplateArgsNetworkInterfaceAliasIpRange {
  ip_cidr_range: string;
}

export interface GoogleComputeInstanceFromTemplateArgsNetworkInterfaceIpv6AccessConfig {
  network_tier: string;
}

export interface GoogleComputeInstanceFromTemplateArgsNetworkInterface {
  access_config?: GoogleComputeInstanceFromTemplateArgsNetworkInterfaceAccessConfig[];
  alias_ip_range?: GoogleComputeInstanceFromTemplateArgsNetworkInterfaceAliasIpRange[];
  ipv6_access_config?: GoogleComputeInstanceFromTemplateArgsNetworkInterfaceIpv6AccessConfig[];
}

export interface GoogleComputeInstanceFromTemplateArgsNetworkPerformanceConfig {
  total_egress_bandwidth_tier: string;
}

export interface GoogleComputeInstanceFromTemplateArgsParams {
}

export interface GoogleComputeInstanceFromTemplateArgsReservationAffinitySpecificReservation {
  key: string;
  values: string[];
}

export interface GoogleComputeInstanceFromTemplateArgsReservationAffinity {
  type: string;
  specific_reservation?: GoogleComputeInstanceFromTemplateArgsReservationAffinitySpecificReservation;
}

export interface GoogleComputeInstanceFromTemplateArgsSchedulingLocalSsdRecoveryTimeout {
  seconds: number;
}

export interface GoogleComputeInstanceFromTemplateArgsSchedulingMaxRunDuration {
  seconds: number;
}

export interface GoogleComputeInstanceFromTemplateArgsSchedulingNodeAffinities {
  key: string;
  operator: string;
  values: string[];
}

export interface GoogleComputeInstanceFromTemplateArgsSchedulingOnInstanceStopAction {
}

export interface GoogleComputeInstanceFromTemplateArgsScheduling {
  local_ssd_recovery_timeout?: GoogleComputeInstanceFromTemplateArgsSchedulingLocalSsdRecoveryTimeout;
  max_run_duration?: GoogleComputeInstanceFromTemplateArgsSchedulingMaxRunDuration;
  node_affinities?: GoogleComputeInstanceFromTemplateArgsSchedulingNodeAffinities[];
  on_instance_stop_action?: GoogleComputeInstanceFromTemplateArgsSchedulingOnInstanceStopAction;
}

export interface GoogleComputeInstanceFromTemplateArgsScratchDisk {
  interface: string;
}

export interface GoogleComputeInstanceFromTemplateArgsServiceAccount {
  scopes: string[];
}

export interface GoogleComputeInstanceFromTemplateArgsShieldedInstanceConfig {
}

export interface GoogleComputeInstanceFromTemplateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleComputeInstanceFromTemplateArgs {
  name: string;
  source_instance_template: string;
  advanced_machine_features?: GoogleComputeInstanceFromTemplateArgsAdvancedMachineFeatures;
  attached_disk?: GoogleComputeInstanceFromTemplateArgsAttachedDisk[];
  boot_disk?: GoogleComputeInstanceFromTemplateArgsBootDisk;
  confidential_instance_config?: GoogleComputeInstanceFromTemplateArgsConfidentialInstanceConfig;
  guest_accelerator?: GoogleComputeInstanceFromTemplateArgsGuestAccelerator[];
  network_interface?: GoogleComputeInstanceFromTemplateArgsNetworkInterface[];
  network_performance_config?: GoogleComputeInstanceFromTemplateArgsNetworkPerformanceConfig;
  params?: GoogleComputeInstanceFromTemplateArgsParams;
  reservation_affinity?: GoogleComputeInstanceFromTemplateArgsReservationAffinity;
  scheduling?: GoogleComputeInstanceFromTemplateArgsScheduling;
  scratch_disk?: GoogleComputeInstanceFromTemplateArgsScratchDisk[];
  service_account?: GoogleComputeInstanceFromTemplateArgsServiceAccount;
  shielded_instance_config?: GoogleComputeInstanceFromTemplateArgsShieldedInstanceConfig;
  timeouts?: GoogleComputeInstanceFromTemplateArgsTimeouts;
}

export class google_compute_instance_from_template extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleComputeInstanceFromTemplateArgs) {
    const meta = {advanced_machine_features:{isBlock:true},attached_disk:{isBlock:true},boot_disk:{isBlock:true,initialize_params:{isBlock:true}},confidential_instance_config:{isBlock:true},guest_accelerator:{isBlock:true},network_interface:{isBlock:true,access_config:{isBlock:true},alias_ip_range:{isBlock:true},ipv6_access_config:{isBlock:true}},network_performance_config:{isBlock:true},params:{isBlock:true},reservation_affinity:{isBlock:true,specific_reservation:{isBlock:true}},scheduling:{isBlock:true,local_ssd_recovery_timeout:{isBlock:true},max_run_duration:{isBlock:true},node_affinities:{isBlock:true},on_instance_stop_action:{isBlock:true}},scratch_disk:{isBlock:true},service_account:{isBlock:true},shielded_instance_config:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_compute_instance_from_template", resourceName);
  }

  get allow_stopping_for_update(): string {
    return `${this.resourceType}.${this.resourceName}.allow_stopping_for_update`;
  }

  get can_ip_forward(): string {
    return `${this.resourceType}.${this.resourceName}.can_ip_forward`;
  }

  get cpu_platform(): string {
    return `${this.resourceType}.${this.resourceName}.cpu_platform`;
  }

  get creation_timestamp(): string {
    return `${this.resourceType}.${this.resourceName}.creation_timestamp`;
  }

  get current_status(): string {
    return `${this.resourceType}.${this.resourceName}.current_status`;
  }

  get deletion_protection(): string {
    return `${this.resourceType}.${this.resourceName}.deletion_protection`;
  }

  get description(): string {
    return `${this.resourceType}.${this.resourceName}.description`;
  }

  get desired_status(): string {
    return `${this.resourceType}.${this.resourceName}.desired_status`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get enable_display(): string {
    return `${this.resourceType}.${this.resourceName}.enable_display`;
  }

  get hostname(): string {
    return `${this.resourceType}.${this.resourceName}.hostname`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get instance_id(): string {
    return `${this.resourceType}.${this.resourceName}.instance_id`;
  }

  get key_revocation_action_type(): string {
    return `${this.resourceType}.${this.resourceName}.key_revocation_action_type`;
  }

  get label_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.label_fingerprint`;
  }

  get labels(): string {
    return `${this.resourceType}.${this.resourceName}.labels`;
  }

  get machine_type(): string {
    return `${this.resourceType}.${this.resourceName}.machine_type`;
  }

  get metadata(): string {
    return `${this.resourceType}.${this.resourceName}.metadata`;
  }

  get metadata_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.metadata_fingerprint`;
  }

  get metadata_startup_script(): string {
    return `${this.resourceType}.${this.resourceName}.metadata_startup_script`;
  }

  get min_cpu_platform(): string {
    return `${this.resourceType}.${this.resourceName}.min_cpu_platform`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get resource_policies(): string {
    return `${this.resourceType}.${this.resourceName}.resource_policies`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get source_instance_template(): string {
    return `${this.resourceType}.${this.resourceName}.source_instance_template`;
  }

  get tags(): string {
    return `${this.resourceType}.${this.resourceName}.tags`;
  }

  get tags_fingerprint(): string {
    return `${this.resourceType}.${this.resourceName}.tags_fingerprint`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get zone(): string {
    return `${this.resourceType}.${this.resourceName}.zone`;
  }
}
