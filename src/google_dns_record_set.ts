import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDnsRecordSetArgsRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers {
  ip_address: string;
  ip_protocol: string;
  load_balancer_type?: string;
  network_url: string;
  port: string;
  project: string;
  region?: string;
}

export interface GoogleDnsRecordSetArgsRoutingPolicyGeoHealthCheckedTargets {
  internal_load_balancers: GoogleDnsRecordSetArgsRoutingPolicyGeoHealthCheckedTargetsInternalLoadBalancers[];
}

export interface GoogleDnsRecordSetArgsRoutingPolicyGeo {
  location: string;
  rrdatas?: string[];
  health_checked_targets?: GoogleDnsRecordSetArgsRoutingPolicyGeoHealthCheckedTargets;
}

export interface GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers {
  ip_address: string;
  ip_protocol: string;
  load_balancer_type?: string;
  network_url: string;
  port: string;
  project: string;
  region?: string;
}

export interface GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets {
  internal_load_balancers: GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargetsInternalLoadBalancers[];
}

export interface GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupBackupGeo {
  location: string;
  rrdatas?: string[];
  health_checked_targets?: GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupBackupGeoHealthCheckedTargets;
}

export interface GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers {
  ip_address: string;
  ip_protocol: string;
  load_balancer_type?: string;
  network_url: string;
  port: string;
  project: string;
  region?: string;
}

export interface GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupPrimary {
  internal_load_balancers: GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupPrimaryInternalLoadBalancers[];
}

export interface GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackup {
  enable_geo_fencing_for_backups?: boolean;
  trickle_ratio?: number;
  backup_geo: GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupBackupGeo[];
  primary: GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackupPrimary;
}

export interface GoogleDnsRecordSetArgsRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers {
  ip_address: string;
  ip_protocol: string;
  load_balancer_type?: string;
  network_url: string;
  port: string;
  project: string;
  region?: string;
}

export interface GoogleDnsRecordSetArgsRoutingPolicyWrrHealthCheckedTargets {
  internal_load_balancers: GoogleDnsRecordSetArgsRoutingPolicyWrrHealthCheckedTargetsInternalLoadBalancers[];
}

export interface GoogleDnsRecordSetArgsRoutingPolicyWrr {
  rrdatas?: string[];
  weight: number;
  health_checked_targets?: GoogleDnsRecordSetArgsRoutingPolicyWrrHealthCheckedTargets;
}

export interface GoogleDnsRecordSetArgsRoutingPolicy {
  enable_geo_fencing?: boolean;
  geo?: GoogleDnsRecordSetArgsRoutingPolicyGeo[];
  primary_backup?: GoogleDnsRecordSetArgsRoutingPolicyPrimaryBackup;
  wrr?: GoogleDnsRecordSetArgsRoutingPolicyWrr[];
}

export interface GoogleDnsRecordSetArgs {
  managed_zone: string;
  name: string;
  rrdatas?: string[];
  ttl?: number;
  type: string;
  routing_policy?: GoogleDnsRecordSetArgsRoutingPolicy;
}

export class google_dns_record_set extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDnsRecordSetArgs) {
    const meta = {routing_policy:{isBlock:true,geo:{isBlock:true,health_checked_targets:{isBlock:true,internal_load_balancers:{isBlock:true}}},primary_backup:{isBlock:true,backup_geo:{isBlock:true,health_checked_targets:{isBlock:true,internal_load_balancers:{isBlock:true}}},primary:{isBlock:true,internal_load_balancers:{isBlock:true}}},wrr:{isBlock:true,health_checked_targets:{isBlock:true,internal_load_balancers:{isBlock:true}}}}};
    super(terraformConfig, "resource", args, meta, "google_dns_record_set", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get managed_zone(): string {
    return `${this.resourceType}.${this.resourceName}.managed_zone`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get type(): string {
    return `${this.resourceType}.${this.resourceName}.type`;
  }
}
