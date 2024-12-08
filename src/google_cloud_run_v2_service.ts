import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleCloudRunV2ServiceArgsBinaryAuthorization {
  breakglass_justification?: string;
  policy?: string;
  use_default?: boolean;
}

export interface GoogleCloudRunV2ServiceArgsScaling {
  min_instance_count?: number;
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainersEnvValueSourceSecretKeyRef {
  secret: string;
  version?: string;
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainersEnvValueSource {
  secret_key_ref?: GoogleCloudRunV2ServiceArgsTemplateContainersEnvValueSourceSecretKeyRef;
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainersEnv {
  name: string;
  value?: string;
  value_source?: GoogleCloudRunV2ServiceArgsTemplateContainersEnvValueSource;
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbeGrpc {
  service?: string;
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbeHttpGetHttpHeaders {
  name: string;
  value?: string;
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbeHttpGet {
  path?: string;
  http_headers?: GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbeHttpGetHttpHeaders[];
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbeTcpSocket {
  port: number;
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbe {
  failure_threshold?: number;
  initial_delay_seconds?: number;
  period_seconds?: number;
  timeout_seconds?: number;
  grpc?: GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbeGrpc;
  http_get?: GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbeHttpGet;
  tcp_socket?: GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbeTcpSocket;
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainersPorts {
  container_port?: number;
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainersResources {
  cpu_idle?: boolean;
  startup_cpu_boost?: boolean;
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbeGrpc {
  service?: string;
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbeHttpGetHttpHeaders {
  name: string;
  value?: string;
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbeHttpGet {
  path?: string;
  http_headers?: GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbeHttpGetHttpHeaders[];
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbeTcpSocket {
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbe {
  failure_threshold?: number;
  initial_delay_seconds?: number;
  period_seconds?: number;
  timeout_seconds?: number;
  grpc?: GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbeGrpc;
  http_get?: GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbeHttpGet;
  tcp_socket?: GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbeTcpSocket;
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainersVolumeMounts {
  mount_path: string;
  name: string;
}

export interface GoogleCloudRunV2ServiceArgsTemplateContainers {
  args?: string[];
  command?: string[];
  depends_on?: string[];
  image: string;
  name?: string;
  working_dir?: string;
  env?: GoogleCloudRunV2ServiceArgsTemplateContainersEnv[];
  liveness_probe?: GoogleCloudRunV2ServiceArgsTemplateContainersLivenessProbe;
  ports?: GoogleCloudRunV2ServiceArgsTemplateContainersPorts;
  resources?: GoogleCloudRunV2ServiceArgsTemplateContainersResources;
  startup_probe?: GoogleCloudRunV2ServiceArgsTemplateContainersStartupProbe;
  volume_mounts?: GoogleCloudRunV2ServiceArgsTemplateContainersVolumeMounts[];
}

export interface GoogleCloudRunV2ServiceArgsTemplateScaling {
  max_instance_count?: number;
  min_instance_count?: number;
}

export interface GoogleCloudRunV2ServiceArgsTemplateVolumesCloudSqlInstance {
  instances?: string[];
}

export interface GoogleCloudRunV2ServiceArgsTemplateVolumesEmptyDir {
  medium?: string;
  size_limit?: string;
}

export interface GoogleCloudRunV2ServiceArgsTemplateVolumesGcs {
  bucket: string;
  read_only?: boolean;
}

export interface GoogleCloudRunV2ServiceArgsTemplateVolumesNfs {
  path: string;
  read_only?: boolean;
  server: string;
}

export interface GoogleCloudRunV2ServiceArgsTemplateVolumesSecretItems {
  mode?: number;
  path: string;
  version?: string;
}

export interface GoogleCloudRunV2ServiceArgsTemplateVolumesSecret {
  default_mode?: number;
  secret: string;
  items?: GoogleCloudRunV2ServiceArgsTemplateVolumesSecretItems[];
}

export interface GoogleCloudRunV2ServiceArgsTemplateVolumes {
  name: string;
  cloud_sql_instance?: GoogleCloudRunV2ServiceArgsTemplateVolumesCloudSqlInstance;
  empty_dir?: GoogleCloudRunV2ServiceArgsTemplateVolumesEmptyDir;
  gcs?: GoogleCloudRunV2ServiceArgsTemplateVolumesGcs;
  nfs?: GoogleCloudRunV2ServiceArgsTemplateVolumesNfs;
  secret?: GoogleCloudRunV2ServiceArgsTemplateVolumesSecret;
}

export interface GoogleCloudRunV2ServiceArgsTemplateVpcAccessNetworkInterfaces {
  tags?: string[];
}

export interface GoogleCloudRunV2ServiceArgsTemplateVpcAccess {
  connector?: string;
  network_interfaces?: GoogleCloudRunV2ServiceArgsTemplateVpcAccessNetworkInterfaces[];
}

export interface GoogleCloudRunV2ServiceArgsTemplate {
  annotations?: { [key: string]: string };
  encryption_key?: string;
  execution_environment?: string;
  labels?: { [key: string]: string };
  revision?: string;
  session_affinity?: boolean;
  containers?: GoogleCloudRunV2ServiceArgsTemplateContainers[];
  scaling?: GoogleCloudRunV2ServiceArgsTemplateScaling;
  volumes?: GoogleCloudRunV2ServiceArgsTemplateVolumes[];
  vpc_access?: GoogleCloudRunV2ServiceArgsTemplateVpcAccess;
}

export interface GoogleCloudRunV2ServiceArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleCloudRunV2ServiceArgsTraffic {
  revision?: string;
  tag?: string;
  type?: string;
}

export interface GoogleCloudRunV2ServiceArgs {
  annotations?: { [key: string]: string };
  client?: string;
  client_version?: string;
  custom_audiences?: string[];
  deletion_protection?: boolean;
  description?: string;
  invoker_iam_disabled?: boolean;
  labels?: { [key: string]: string };
  location: string;
  name: string;
  binary_authorization?: GoogleCloudRunV2ServiceArgsBinaryAuthorization;
  scaling?: GoogleCloudRunV2ServiceArgsScaling;
  template: GoogleCloudRunV2ServiceArgsTemplate;
  timeouts?: GoogleCloudRunV2ServiceArgsTimeouts;
  traffic?: GoogleCloudRunV2ServiceArgsTraffic[];
}

export class google_cloud_run_v2_service extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleCloudRunV2ServiceArgs) {
    const meta = {binary_authorization:{isBlock:true},scaling:{isBlock:true},template:{isBlock:true,containers:{isBlock:true,env:{isBlock:true,value_source:{isBlock:true,secret_key_ref:{isBlock:true}}},liveness_probe:{isBlock:true,grpc:{isBlock:true},http_get:{isBlock:true,http_headers:{isBlock:true}},tcp_socket:{isBlock:true}},ports:{isBlock:true},resources:{isBlock:true},startup_probe:{isBlock:true,grpc:{isBlock:true},http_get:{isBlock:true,http_headers:{isBlock:true}},tcp_socket:{isBlock:true}},volume_mounts:{isBlock:true}},scaling:{isBlock:true},volumes:{isBlock:true,cloud_sql_instance:{isBlock:true},empty_dir:{isBlock:true},gcs:{isBlock:true},nfs:{isBlock:true},secret:{isBlock:true,items:{isBlock:true}}},vpc_access:{isBlock:true,network_interfaces:{isBlock:true}}},timeouts:{isBlock:true},traffic:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_cloud_run_v2_service", resourceName);
  }

  get conditions(): string {
    return `${this.resourceType}.${this.resourceName}.conditions`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get creator(): string {
    return `${this.resourceType}.${this.resourceName}.creator`;
  }

  get delete_time(): string {
    return `${this.resourceType}.${this.resourceName}.delete_time`;
  }

  get effective_annotations(): string {
    return `${this.resourceType}.${this.resourceName}.effective_annotations`;
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get expire_time(): string {
    return `${this.resourceType}.${this.resourceName}.expire_time`;
  }

  get generation(): string {
    return `${this.resourceType}.${this.resourceName}.generation`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ingress(): string {
    return `${this.resourceType}.${this.resourceName}.ingress`;
  }

  get last_modifier(): string {
    return `${this.resourceType}.${this.resourceName}.last_modifier`;
  }

  get latest_created_revision(): string {
    return `${this.resourceType}.${this.resourceName}.latest_created_revision`;
  }

  get latest_ready_revision(): string {
    return `${this.resourceType}.${this.resourceName}.latest_ready_revision`;
  }

  get launch_stage(): string {
    return `${this.resourceType}.${this.resourceName}.launch_stage`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get observed_generation(): string {
    return `${this.resourceType}.${this.resourceName}.observed_generation`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get reconciling(): string {
    return `${this.resourceType}.${this.resourceName}.reconciling`;
  }

  get terminal_condition(): string {
    return `${this.resourceType}.${this.resourceName}.terminal_condition`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }

  get traffic_statuses(): string {
    return `${this.resourceType}.${this.resourceName}.traffic_statuses`;
  }

  get uid(): string {
    return `${this.resourceType}.${this.resourceName}.uid`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }

  get uri(): string {
    return `${this.resourceType}.${this.resourceName}.uri`;
  }

  get urls(): string {
    return `${this.resourceType}.${this.resourceName}.urls`;
  }
}
